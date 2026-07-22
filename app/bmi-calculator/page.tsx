// app/bmi-calculator/page.tsx
'use client';

import { useState } from 'react';

type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';

interface BMIResult {
  bmi: number;
  category: string;
  height: number;
  weight: number;
  age: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  bmr: number;
  dailyCalories: number;
  healthyWeightRange: {
    min: string;
    max: string;
  };
}

interface MacroSplit {
  protein: number;
  carbs: number;
  fats: number;
}

interface MealPlan {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
}

export default function BMICalculatorPage() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<Gender>('male');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();

    let heightInMeters: number;
    let weightInKg: number;

    if (unit === 'metric') {
      heightInMeters = parseFloat(height) / 100;
      weightInKg = parseFloat(weight);
    } else {
      heightInMeters = parseFloat(height) * 0.0254;
      weightInKg = parseFloat(weight) * 0.453592;
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    const category = getBMICategory(bmiValue);
    
    const bmr = calculateBMR(weightInKg, heightInMeters * 100, parseInt(age), gender);
    const dailyCalories = calculateDailyCalories(bmr, activityLevel);

    const result: BMIResult = {
      bmi: parseFloat(bmiValue.toFixed(1)),
      category,
      height: heightInMeters * 100,
      weight: weightInKg,
      age: parseInt(age),
      gender,
      activityLevel,
      bmr: Math.round(bmr),
      dailyCalories: Math.round(dailyCalories),
      healthyWeightRange: {
        min: (18.5 * heightInMeters * heightInMeters).toFixed(1),
        max: (24.9 * heightInMeters * heightInMeters).toFixed(1),
      },
    };

    setBmiResult(result);
    
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const calculateBMR = (weight: number, height: number, age: number, gender: Gender): number => {
    if (gender === 'male') {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  };

  const calculateDailyCalories = (bmr: number, activityLevel: ActivityLevel): number => {
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      'very-active': 1.9,
    };
    return bmr * multipliers[activityLevel];
  };

  const getDietPlan = () => {
    if (!bmiResult) return null;
    
    const { category, dailyCalories } = bmiResult;
    
    let calorieAdjustment = 0;
    let focus = '';
    let proteinRatio = 0.3;
    let carbRatio = 0.4;
    let fatRatio = 0.3;

    if (category === 'Underweight') {
      calorieAdjustment = 500;
      focus = '✨ Weight Gain - Healthy Caloric Surplus';
      proteinRatio = 0.25;
      carbRatio = 0.5;
      fatRatio = 0.25;
    } else if (category === 'Overweight' || category === 'Obese') {
      calorieAdjustment = -500;
      focus = '🎯 Weight Loss - Caloric Deficit';
      proteinRatio = 0.4;
      carbRatio = 0.35;
      fatRatio = 0.25;
    } else {
      calorieAdjustment = 0;
      focus = '⚖️ Weight Maintenance - Balanced Nutrition';
      proteinRatio = 0.3;
      carbRatio = 0.4;
      fatRatio = 0.3;
    }

    const adjustedCalories = dailyCalories + calorieAdjustment;
    
    const macros: MacroSplit = {
      protein: Math.round((adjustedCalories * proteinRatio) / 4),
      carbs: Math.round((adjustedCalories * carbRatio) / 4),
      fats: Math.round((adjustedCalories * fatRatio) / 9),
    };

    const mealPlan: MealPlan = {
      breakfast: category === 'Underweight' 
        ? '🥣 Oatmeal with banana, almonds, and whole milk + 2 boiled eggs'
        : category === 'Overweight' || category === 'Obese'
        ? '🥛 Greek yogurt with berries and a sprinkle of low-fat granola'
        : '🍳 Scrambled eggs with whole grain toast and avocado',
      lunch: category === 'Underweight'
        ? '🍗 Grilled chicken breast with quinoa and roasted vegetables + olive oil'
        : category === 'Overweight' || category === 'Obese'
        ? '🥗 Large salad with grilled chicken, mixed greens, and light vinaigrette'
        : '🌯 Turkey and avocado wrap with whole wheat tortilla and side salad',
      dinner: category === 'Underweight'
        ? '🐟 Salmon with sweet potato and steamed broccoli + brown rice'
        : category === 'Overweight' || category === 'Obese'
        ? '🐟 Baked white fish with steamed vegetables and cauliflower rice'
        : '🥩 Lean steak with roasted vegetables and quinoa',
      snacks: category === 'Underweight'
        ? '🥜 Trail mix, protein shake, peanut butter with apple slices'
        : category === 'Overweight' || category === 'Obese'
        ? '🥕 Carrot sticks with hummus, small apple, green tea'
        : '🍦 Greek yogurt, handful of nuts, fruit',
    };

    return { focus, adjustedCalories, macros, mealPlan };
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Underweight':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          text: 'text-amber-700',
          badge: 'bg-amber-100 text-amber-800',
          icon: '⚠️'
        };
      case 'Normal weight':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          text: 'text-emerald-700',
          badge: 'bg-emerald-100 text-emerald-800',
          icon: '✅'
        };
      case 'Overweight':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          text: 'text-orange-700',
          badge: 'bg-orange-100 text-orange-800',
          icon: '⚠️'
        };
      case 'Obese':
        return {
          bg: 'bg-rose-50',
          border: 'border-rose-200',
          text: 'text-rose-700',
          badge: 'bg-rose-100 text-rose-800',
          icon: '🔴'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-700',
          badge: 'bg-gray-100 text-gray-800',
          icon: '📊'
        };
    }
  };

  const dietPlan = bmiResult ? getDietPlan() : null;
  const categoryStyles = bmiResult ? getCategoryStyles(bmiResult.category) : null;

  return (
    <div className="w-full overflow-x-hidden">
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Fixed background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
              <span className="px-4 py-1 text-sm font-medium text-blue-600">Health & Wellness</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              BMI Calculator
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> for Diet Planning</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Get personalized diet recommendations based on your body composition and goals
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-100/50 border border-white/20 overflow-hidden">
            {/* Calculator Form Section */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="p-2 bg-blue-50 rounded-xl">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Enter Your Details</h2>
              </div>
              
              {/* Unit Toggle */}
              <div className="mb-6 sm:mb-8">
                <div className="flex p-1 bg-gray-100 rounded-xl sm:rounded-2xl max-w-xs mx-auto">
                  <button
                    onClick={() => setUnit('metric')}
                    className={`flex-1 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                      unit === 'metric'
                        ? 'bg-white text-blue-600 shadow-md shadow-blue-100'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Metric
                  </button>
                  <button
                    onClick={() => setUnit('imperial')}
                    className={`flex-1 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                      unit === 'imperial'
                        ? 'bg-white text-blue-600 shadow-md shadow-blue-100'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Imperial
                  </button>
                </div>
              </div>

              <form onSubmit={calculateBMI} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Height Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      {unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                        min="1"
                        step="0.1"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 text-sm sm:text-base"
                        placeholder={unit === 'metric' ? '170' : '67'}
                      />
                      <div className="absolute right-3 top-2 sm:top-3 text-xs sm:text-sm text-gray-400 group-focus-within:text-blue-500">
                        {unit === 'metric' ? 'cm' : 'in'}
                      </div>
                    </div>
                  </div>

                  {/* Weight Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      {unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                        min="1"
                        step="0.1"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 text-sm sm:text-base"
                        placeholder={unit === 'metric' ? '70' : '154'}
                      />
                      <div className="absolute right-3 top-2 sm:top-3 text-xs sm:text-sm text-gray-400 group-focus-within:text-blue-500">
                        {unit === 'metric' ? 'kg' : 'lbs'}
                      </div>
                    </div>
                  </div>

                  {/* Age Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Age</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                      min="1"
                      max="120"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 text-sm sm:text-base"
                      placeholder="30"
                    />
                  </div>

                  {/* Gender Select */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Gender</label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setGender('male')}
                        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                          gender === 'male'
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-200'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        ♂ Male
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('female')}
                        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                          gender === 'female'
                            ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        ♀ Female
                      </button>
                    </div>
                  </div>
                </div>

                {/* Activity Level */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Activity Level</label>
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 text-sm sm:text-base"
                  >
                    <option value="sedentary" className="text-gray-900">🪑 Sedentary (little or no exercise)</option>
                    <option value="light" className="text-gray-900">🚶 Light (exercise 1-3 days/week)</option>
                    <option value="moderate" className="text-gray-900">🏃 Moderate (exercise 3-5 days/week)</option>
                    <option value="active" className="text-gray-900">💪 Active (exercise 6-7 days/week)</option>
                    <option value="very-active" className="text-gray-900">⚡ Very Active (intense daily exercise)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-blue-200 text-sm sm:text-base"
                >
                  Calculate Your BMI
                </button>
              </form>
            </div>

            {/* Results Section */}
            {bmiResult && dietPlan && categoryStyles && (
              <div id="results-section" className="border-t border-gray-100 bg-gray-50/50">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                    <div className="p-2 bg-emerald-50 rounded-xl">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Your Personalized Results</h3>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">Your BMI</p>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{bmiResult.bmi}</p>
                      <div className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${categoryStyles.badge}`}>
                        <span className="mr-1">{categoryStyles.icon}</span>
                        {bmiResult.category}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">Daily Calories</p>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{dietPlan.adjustedCalories}</p>
                      <p className="text-xs sm:text-sm text-gray-500">kcal per day</p>
                    </div>
                    
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">Healthy Weight Range</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {bmiResult.healthyWeightRange.min} - {bmiResult.healthyWeightRange.max} kg
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">For your height</p>
                    </div>
                  </div>

                  {/* Focus Card */}
                  <div className={`${categoryStyles.bg} ${categoryStyles.border} border rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8`}>
                    <h4 className={`text-base sm:text-lg font-semibold ${categoryStyles.text} mb-2`}>{dietPlan.focus}</h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      BMR: {bmiResult.bmr} kcal | Activity: {activityLevel.replace('-', ' ')}
                    </p>
                  </div>

                  {/* Macronutrients */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Recommended Daily Macros</h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                        <p className="text-xs sm:text-sm text-blue-600 font-medium mb-1">Protein</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700">{dietPlan.macros.protein}g</p>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                        <p className="text-xs sm:text-sm text-emerald-600 font-medium mb-1">Carbs</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-700">{dietPlan.macros.carbs}g</p>
                      </div>
                      <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                        <p className="text-xs sm:text-sm text-amber-600 font-medium mb-1">Fats</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-700">{dietPlan.macros.fats}g</p>
                      </div>
                    </div>
                  </div>

             

                  {/* Tips */}
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                    <h4 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <span className="text-xl sm:text-2xl mr-2">💡</span>
                      Tips for Success
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-blue-50">
                      <li className="flex items-center"><span className="mr-2">✓</span> Stay hydrated - drink 8+ glasses of water</li>
                      <li className="flex items-center"><span className="mr-2">✓</span> Include physical activity daily</li>
                      <li className="flex items-center"><span className="mr-2">✓</span> Get 7-9 hours of quality sleep</li>
                      <li className="flex items-center"><span className="mr-2">✓</span> Track your progress weekly</li>
                      <li className="flex items-center"><span className="mr-2">✓</span> Consult a healthcare provider</li>
                      <li className="flex items-center"><span className="mr-2">✓</span> Be consistent with your plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          .bg-grid-slate-100 {
            background-image: linear-gradient(to right, #f1f5f9 1px, transparent 1px),
              linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
            background-size: 24px 24px;
          }
        `}</style>
      </main>
    </div>
  );
}
import React from "react";

const BMI = () => {
  const handleCalculate = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.activity.value);
  };
  return (
    <div className="flex px-4 flex-col-reverse lg:flex-row gap-10 py-16 lg:px-16">
      <div className="w-full">
        <h2 className="text-4xl pb-3">Calculate Your BMI</h2>
        <p>
          BMI, or Body Mass Index, serves as a valuable health indicator by
          evaluating the relationship between an individual's weight and height.
          Widely used for health screenings, it categorizes people into
          different weight status groups, aiding in identifying potential health
          risks. BMI is instrumental for healthcare professionals in treatment
          planning, allowing them to make informed decisions about
          interventions. Despite its prevalence, BMI has limitations and is best
          utilized in conjunction with other health assessments for a
          comprehensive understanding of an individual's overall health and
          wellness.
        </p>
        <div className="py-5">
          <form onSubmit={handleCalculate}>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="height">
                  Height <span className="text-red-700 text-xl">*</span>{" "}
                </label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  required
                  className="myInput"
                />
              </div>
              <div>
                <label htmlFor="weight">
                  Weight<span className="text-red-700 text-xl">*</span>
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  required
                  className="myInput"
                />
              </div>
              <div>
                <label htmlFor="age">
                  Age<span className="text-red-700 text-xl">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="age"
                  id="age"
                  className="myInput"
                />
              </div>
              <div>
                <label htmlFor="gender">
                  Gender<span className="text-red-700 text-xl">*</span>
                </label>
                <select name="gender" required className="myInput">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className=" mt-5">
              <label htmlFor="factor">
                Select an activity factor
                <span className="text-red-700 text-xl">*</span>
              </label>
              <select name="activity" required className="myInput">
                <option value="level1">Little or no Exercise / desk job</option>
                <option value="level2">
                  Light exercise / sports 1 - 3 days/ week
                </option>
                <option value="level3">
                  Moderate Exercise, sports 3 - 5 days / week
                </option>
                <option value="level4">
                  Heavy Exercise / sports 6 - 7 days / week
                </option>
                <option value="level5">
                  Very heavy exercise/ physical job / training 2 x / day
                </option>
              </select>
            </div>
            <button className="btn mt-8 myBtn">Calculate</button>
          </form>
        </div>
      </div>
      <div className="w-full ">
        <h2 className="text-4xl">BMI Calculator Chart</h2>
        <div className="divide-y-2 w-full lg:p-10 flex flex-col justify-center text-lg mt-5 lg:text-2xl">
          <p className=" divide-x-2 flex ">
            <p className="px-3 lg:px-10 py-3 w-full">BMI</p>
            <p className="px-3 lg:px-10 py-3 w-full">Weight status</p>
          </p>
          {/* p.divide-x-2.flex>p.px-10*2 */}
          <p className="divide-x-2 flex">
            <p className="px-3 lg:px-10 py-3 w-full">Below 18.5</p>
            <p className="px-3 lg:px-10 py-3 w-full">Underweight</p>
          </p>
          <p className="divide-x-2 flex">
            <p className="px-3 lg:px-10 py-3 w-full">18.5 – 24.9</p>
            <p className="px-3 lg:px-10 py-3 w-full">Healthy</p>
          </p>
          <p className="divide-x-2 flex">
            <p className="px-3 lg:px-10 py-3 w-full">25.0 – 29.9</p>
            <p className="px-3 lg:px-10 py-3 w-full">Overweight</p>
          </p>
          <p className="divide-x-2 flex">
            <p className="px-3 lg:px-10 w-full py-3">30.0 and Above</p>
            <p className="px-3 lg:px-10 w-full py-3">Obese</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMI;

const {Bmi_cal}=require('./calculate');

test.each([[80,1.5,"overweight"],[60,1.5,"perfect weight"],[40,1.5,"under"]])(
    "%1 and %1 equals %i bmi", (weight,height,expected)=>{
        expect(Bmi_cal(weight,height)).toBe(expected)
})
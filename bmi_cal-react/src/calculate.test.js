const {Bmi_cal}=require('./calculate');


//test the overweight
test("should be over 25", ()=>{
    const weight=80
    const height=1.5;
    const bmi=weight/(height*height);
    expect(bmi).toBeLessThanOrEqual(35.6)
    
}),
//test the nothing
test("should be NaN", ()=>{
    const weight=0
    const height=0;
    const bmi=weight/(height*height);
    expect(bmi).toBeLessThanOrEqual(NaN)
    
}), 
//test the overweight
test("should be equal 26.7", ()=>{
    const weight=60
    const height=1.5;
    const bmi=weight/(height*height);
    expect(bmi).toBeLessThanOrEqual(26.7)
    
}), 
//test the overweight
test("should equal 22.2 = healthy weight", ()=>{
    const weight=50
    const height=1.5;
    const bmi=weight/(height*height);
    expect(bmi).toBeLessThanOrEqual(22.2222222222222222)
    
});
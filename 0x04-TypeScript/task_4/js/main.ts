/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();

    export const cTeacher: Teacher ={
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 10,
    }


        // Test Cpp subject
        console.log("C++")
        cpp.setTeacher(cTeacher);
        console.log(cpp.getRequirements());
        console.log(cpp.getAvailableTeacher());
      

         // Test Java subject
        console.log("Java")
        java.setTeacher(cTeacher);
        console.log(java.getRequirements());
        console.log(java.getRequirements());
       

         // Test React subject
        console.log("React")
        react.setTeacher(cTeacher);
        console.log(react.getRequirements());
        console.log(react.getAvailableTeacher());
}


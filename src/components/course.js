import React from "react";

export default (props)=>{
    const courses = props.element;
    return(
        <div className="shadow p-8 bg-white mr-4 rounded">
                        <h4 className="font-bold">
                            <a href={courses.url} target="_blank">{courses.title}</a>
                        </h4>
                        <div className="text-center">
                           <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius"> Progreso: {parseInt(courses.progress)})%</span>
                         </div>

                    </div>
    );
}





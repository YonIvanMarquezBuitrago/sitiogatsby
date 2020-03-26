import React from "react";
import { useStaticQuery,grap, graphql } from "gatsby";
import Posts from "./posts";
import Certificate from "./certificate";
import Course from "./course";

export default ()=>{
const data=useStaticQuery(graphql`{
    codigofacilitoJson {
      data {
        certificates {
          score
          title
          code
        }
        courses {
            progress
            title
            url
          }
      }
    }
  }`);

  console.log(data)
    return(
    <section>
        <div className="mt-24">
          <div className="max-w-4xl mx-auto">
              <Posts 
              data={data.codigofacilitoJson.data.certificates}
              card={Certificate}
              title="Mis Certificados On Line en Código Facilito"/>
              <Posts 
              data={data.codigofacilitoJson.data.courses}
              card={Course}
              title="Mis Cursos en Código Facilito"/>            
          </div>
        </div>
    </section>
    );
    }
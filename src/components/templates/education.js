import React from "react";
import {graphql, Link} from "gatsby";
import EdNav from "../education-nav";

export default (props)=>{
    const pageData=props.data.educationJson;
    return(
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                <Link to="/" className="uppercase underline text-pink-500">Regresar al Inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul>
                {
                    pageData.items.map((item,index)=>(
                        <li className="bg-white shadow mt-4 flex" key={index}>
                            <p class="vertical-text">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    {
                                        item.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</span>
                                    }
                                    {
                                        item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn mt-4 inline-block">Ver más</a>
                                    }
                                </div>
                                <div className="inline-block p-2 text-2xl bg-green-100 bg-green-700">{item.score}</div>
                            </div>

                        </li>

                    ))
                }
            </ul>
         <EdNav />
        </div>
    );
}

export const query = graphql`
    query($slug : String){
      educationJson(slug:{eq: $slug}){
          title
          description
          slug
          items{
              name
              degree
              score
              url
          }
      }
    }
`;



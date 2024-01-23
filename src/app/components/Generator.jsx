"use client"

import {useEffect, useState} from "react";

const Generator = () => {
    const [convertStyle, setConvertStyle] = useState("")
    const [style, setStyle] = useState({
        "::-webkit-scrollbar": {
            width: "10px"
        },
        "::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            "border-radius": "15px",
            border: "0px",
            "border-style": "solid",
            "border-color": "white"
        },
        "::-webkit-scrollbar-thumb": {
            background: "#888",
            "border-radius": "15px",
            border: "0px",
            "border-style": "solid",
            "border-color": "white"
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#555"
        }
    })

    const convertStyleFunction = () => {
        let styleNew = "\n"

        for (const styleName in style) {
            styleNew += `${styleName} { \n`
            for (const item in style[styleName]) { // style[styleName] = { width: "10px" },
                styleNew += `\t ${item}: ${style[styleName][item]}; \n`
                // console.log(styleName, item, style[styleName][item]) //  style[styleName][item] = 10px item = width styleName = ::-webkit-scrollbar
            }
            styleNew += `} \n `
        }

        setConvertStyle(styleNew)
    }

    useEffect(() => {
        convertStyleFunction()
    }, [style]);


    const inputOnChange = (styleName, item, itemValue) => {
        style[styleName][item] = `${itemValue}`
        setStyle(style)
        convertStyleFunction()
        console.log(style)
    }

    return (
        <div className="bg-white/10 h-full px-12 py-9 rounded-lg overflow-auto">
            <h2 className="text-2xl mb-2 text-center">Scroll Style Generator</h2>
            <div dangerouslySetInnerHTML={{__html: `<style>${convertStyle}</style>`}}/>
            <div className="flex flex-col gap-4 ">
                <div className="p-3 px-5 rounded-lg bg-white/10">
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll Size
                        </div>
                        <input type="text" className="bg-black inline w-8 text-white rounded-lg p-1 me-1 text-center"
                               defaultValue="10"
                               onChange={e => inputOnChange("::-webkit-scrollbar", "width", `${e.target.value}px`)}/>px
                    </div>
                </div>
                <div className="p-3 px-5 rounded-lg bg-white/10 flex flex-col gap-2">
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll background color
                        </div>
                        <input type="color"
                               className="bg-transparent w-16 text-white rounded-lg overflow-hidden me-1 text-center"
                               defaultValue="red"
                               onChange={e => inputOnChange("::-webkit-scrollbar-track", "background", `${e.target.value}`)}/>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll background radius
                        </div>
                        <input type="text" className="bg-black inline w-8 text-white rounded-lg p-1 me-1 text-center"
                               defaultValue="10"
                               onChange={e => inputOnChange("::-webkit-scrollbar-track", "border-radius", `${e.target.value}px`)}/>px
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll background border size
                        </div>
                        <input type="text" className="bg-black inline w-8 text-white rounded-lg p-1 me-1 text-center"
                               defaultValue="0"
                               onChange={e => inputOnChange("::-webkit-scrollbar-track", "border", `${e.target.value}px`)}/>px
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll background border color
                        </div>
                        <input type="color"
                               className="bg-transparent w-16 text-white rounded-lg overflow-hidden me-1 text-center"
                               defaultValue="10"
                               onChange={e => inputOnChange("::-webkit-scrollbar-track", "border-color", `${e.target.value}`)}/>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll background border type
                        </div>
                        <input type="text" className="bg-black inline w-16 text-white rounded-lg p-1 me-1 text-center"
                               defaultValue="solid"
                               onChange={e => inputOnChange("::-webkit-scrollbar-track", "border-style", `${e.target.value}`)}/>
                    </div>
                </div>
                <div className="p-3 px-5 rounded-lg bg-white/10 flex flex-col gap-2">
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll color
                        </div>
                        <input type="color"
                               className="bg-transparent w-16 text-white rounded-lg overflow-hidden me-1 text-center"
                               defaultValue="red"
                               onChange={e => inputOnChange("::-webkit-scrollbar-thumb", "background", `${e.target.value}`)}/>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll hover color
                        </div>
                        <input type="color"
                               className="bg-transparent w-16 text-white rounded-lg overflow-hidden me-1 text-center"
                               defaultValue="red"
                               onChange={e => inputOnChange("::-webkit-scrollbar-thumb:hover", "background", `${e.target.value}`)}/>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll radius
                        </div>
                        <input type="text" className="bg-black inline w-8 text-white rounded-lg p-1 me-1 text-center"
                               defaultValue="10"
                               onChange={e => inputOnChange("::-webkit-scrollbar-thumb", "border-radius", `${e.target.value}px`)}/>px
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll border size
                        </div>
                        <input type="text" className="bg-black inline w-8 text-white rounded-lg p-1 me-1 text-center"
                               defaultValue="0"
                               onChange={e => inputOnChange("::-webkit-scrollbar-thumb", "border", `${e.target.value}px`)}/>px
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll border color
                        </div>
                        <input type="color"
                               className="bg-transparent w-16 text-white rounded-lg overflow-hidden me-1 text-center"
                               defaultValue="red"
                               onChange={e => inputOnChange("::-webkit-scrollbar-thumb", "border-color", `${e.target.value}`)}/>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            Scroll border type
                        </div>
                        <input type="text" className="bg-black inline w-16 text-white rounded-lg p-1 me-1 text-center"
                               defaultValue="solid"
                               onChange={e => inputOnChange("::-webkit-scrollbar-thumb", "border-style", `${e.target.value}`)}/>
                    </div>
                </div>
                <div className="p-3 px-5 rounded-lg bg-white/10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex w-[100%] ">
                            <div className="me-auto ">
                                Scroll Size
                            </div>
                            <button className="ms-auto text-sm">
                                Copy Code
                            </button>
                        </div>

                        <textarea className="bg-black inline w-full text-white rounded-lg p-2"
                                  defaultValue={convertStyle} rows={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Generator
import { useState } from "react"

export default function StickyNotes(){
    const objSticyNotes = {
        id: 0,
        note: "Its not about the destination, its about the journey",
        color: getRandomColor()
    }
    const [stickyNotes, setStickyNotes] = useState([objSticyNotes]);

    const StickyItem = ({data, index}) => {
        return(
            <div className="sticky-item w-200px h-200px border p-0 mb-8 mx-1" style={{backgroundColor:data.color}}>
                <div className="sticky-header px-2 border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-border" onClick={() => setStickyNotes([...stickyNotes, objSticyNotes])}>
                            <i className="bi bi-plus fs-4 text-dark"></i>
                        </span>
                        <span className="fw-border" onClick={() => setStickyNotes((prev) =>{
                            const newdata = [...prev]
                            delete newdata[index]
                            return newdata;
                        })}>
                            <i className="bi bi-x-lg text-dark"></i>
                        </span>
                    </div>
                </div>
                <div className="sticky-body p-0">
                    <textarea name="note" className="w-100 border-0 bg-transparent h-150px" style={{resize:'none'}} value={data.note}></textarea>
                </div>
            </div>
        )
    }

    return(
        <div className="card mb-5 mb-xl-10">
            <div className="card-header">
                <div className="card-tittle">
                <h3>StickyNotes</h3>
            </div>
        </div>
        <div className="card-body">
            <div className="d-flex flex-row">
                {stickyNotes.map((v,index) =>(
                    (v) ? (
                        <StickyItem key={index} data={v} index={index} />

                    ) : ""
                ))}
            </div>
        </div>
        </div>
    )
    
}

const getRandomColor = () =>{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.random()*16];
    }
    return color;
}
import React, { useState } from 'react'
import Layout from './Layout'

export default function Widget() {
    const [title, setTitle] = useState("My Apps");
    return (
        <Layout title={title} >
            <div className="w-lg-400px mx-3">
                <div className="bg-body rounded shadow-sm p-10 p-lg-15">
                    <form method='post' autoComplete='off' className='form w-100' >
                        <div className="text-center mb-10">
                            <h1 className='text-dark mb-3'>Widget One</h1>
                            <div className="text-gray-400 fw-bold fs-5">
                                Please fill up this form with correctly
                            </div>
                        </div>

                        <div className="fv-row mb-10 fv-plugins-icon-container">
                            <label className="form-label fs-6 fw-bolder text-dark">Type the title of this web</label>
                            <input type="text" name="title" className='form-control form-control-lg form-control-solid' defaultValue={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="text-center">
                            <button type='button' className='btn btn-lg btn-primary w-100 mb-5'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>            
        </Layout>
    )
}

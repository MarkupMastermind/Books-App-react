import React from 'react'

const AddBook = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="row g-3">
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Category</label>
                            <select name="" id="" className="form-control">
                                <option value="Science">Science</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Novel">Novel</option>
                                <option value="Biography">Biography</option>
                            </select>
                        </div>
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Auther Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="number" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="p-2 btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook
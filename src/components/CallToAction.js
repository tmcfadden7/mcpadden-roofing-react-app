import React from 'react'

export const CallToAction = () => {
  return (
    <>
        <section className='contact-container'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className='h2'>Free Estimates</h2>
                        <button>Call Us</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className='h2'>Sign up for more info</h2>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

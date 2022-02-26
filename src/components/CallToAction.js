import React from 'react'

export const CallToAction = () => {
  return (
    <>
        <section className='contact-container'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2>Free Estimates</h2>
                        <button>Call Us</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Sign up for more info</h2>
                        <form>
                            <input type="email" name="email" id="email" />
                            <input type="submit" value="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

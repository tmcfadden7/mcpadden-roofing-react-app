import React from 'react'

export const CallToAction = () => {
  return (
    <>
        <section className='contact-container'>
            <div className="container">
                <div className="contact-btn">
                    <h2>Free Estimates</h2>
                    <button>Call Us</button>
                </div>
                <div className="email-input">
                    <h2>Sign up for more info</h2>
                    <form>
                        <input type="email" name="email" id="email" />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

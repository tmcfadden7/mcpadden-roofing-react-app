import React from 'react'

export const CallToAction = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="contact-btn">
                    <h2>Free Estimates</h2>
                    <button>Call Us</button>
                </div>
                <div className="email-input">
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

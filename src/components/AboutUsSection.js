import workerImg from '../images/construction-workers.jpg';

function AboutUsSection() {

    return (
        <>
            <section className="about-section-container">
                <div className="container">
                    <div>
                        <img className='img-fluid' src={workerImg} alt="" />
                    </div>
                    <div>
                        <h2>Our Story</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, culpa recusandae natus tenetur quidem harum vitae odit sequi, molestias ex consequuntur beatae suscipit doloremque, perspiciatis nesciunt iusto unde. Eaque, libero? ... <a href="#read-more">Read More</a></p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUsSection;
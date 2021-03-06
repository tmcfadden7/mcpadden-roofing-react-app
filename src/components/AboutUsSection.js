import workerImg from '../images/construction-workers.jpg';

function AboutUsSection() {
	return (
		<>
			<section className='about-section-container px-1 py-5 p-sm-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-6 col-md-4'>
							<img
								className='img-fluid'
								src={workerImg}
								alt='Construction Workers'
							/>
						</div>
						<div className='col-12 col-md-8'>
							<h2 className='h2 mb-3'>Our Story</h2>
							<p className='lead'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti, culpa recusandae natus tenetur quidem harum vitae odit
								sequi, molestias ex consequuntur beatae suscipit doloremque,
								perspiciatis nesciunt iusto unde. Eaque, libero?
							</p>
							<p className='lead'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti, culpa recusandae natus tenetur quidem harum vitae odit
								sequi, molestias ex consequuntur beatae suscipit doloremque,
								perspiciatis nesciunt iusto unde. Eaque, libero?
							</p>
							<p className='lead'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti, culpa recusandae natus tenetur quidem harum vitae odit
								sequi, molestias ex consequuntur beatae suscipit doloremque,
								perspiciatis nesciunt iusto unde. Eaque, libero? ...{' '}
								<a href='#read-more'>Read More</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutUsSection;

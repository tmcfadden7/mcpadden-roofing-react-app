const Services = () => {
	return (
		<>
			<section className='p-4'>
				<div className='container'>
					<h2 className='h2 text-center d-block d-md-none'>Services</h2>
					<div className='row'>
						<div className='col-12 col-md-4 border py-3'>
							<h2 className='h2'>Call or Email us today!</h2>
							<form>
								<div className='mb-3'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Email address
									</label>
									<input
										type='email'
										className='form-control'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
									<div id='emailHelp' className='form-text'>
										We'll never share your email with anyone else.
									</div>
								</div>
								<button type='submit' className='btn btn-primary'>
									Submit
								</button>
							</form>
						</div>
						<div className='col-12 col-md-8'>
							<h2 className='h2 text-center d-none d-md-block'>Services</h2>
							<div class='accordion' id='accordionServices'>
								<div class='accordion-item'>
									<h2 class='accordion-header' id='headingOne'>
										<button
											class='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseOne'
											aria-expanded='true'
											aria-controls='collapseOne'
										>
											Roof Types
										</button>
									</h2>
									<div
										id='collapseOne'
										class='accordion-collapse collapse show'
										aria-labelledby='headingOne'
										data-bs-parent='#accordionServices'
									>
										<div class='accordion-body'>
											<div className='row'>
												<div className='col-md-6 col-12'>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Quia atque eos, possimus ullam enim sapiente
													reiciendis et laborum labore autem repellendus id
													minus neque ad voluptates amet laudantium ratione
													esse.
												</div>
												<div className='col-md-6 col-12'>
													<h1>IMAGE</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class='accordion-item'>
									<h2 class='accordion-header' id='headingTwo'>
										<button
											class='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseTwo'
											aria-expanded='false'
											aria-controls='collapseTwo'
										>
											Roof & Gutter Repair
										</button>
									</h2>
									<div
										id='collapseTwo'
										class='accordion-collapse collapse'
										aria-labelledby='headingTwo'
										data-bs-parent='#accordionServices'
									>
										<div class='accordion-body'>
											<div className='row'>
												<div className='col-md-6 col-12'>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Quia atque eos, possimus ullam enim sapiente
													reiciendis et laborum labore autem repellendus id
													minus neque ad voluptates amet laudantium ratione
													esse.
												</div>
												<div className='col-md-6 col-12'>
													<h1>IMAGE</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class='accordion-item'>
									<h2 class='accordion-header' id='headingThree'>
										<button
											class='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseThree'
											aria-expanded='false'
											aria-controls='collapseThree'
										>
											Roof Inspections
										</button>
									</h2>
									<div
										id='collapseThree'
										class='accordion-collapse collapse'
										aria-labelledby='headingThree'
										data-bs-parent='#accordionServices'
									>
										<div class='accordion-body'>
											<div className='row'>
												<div className='col-md-6 col-12'>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Quia atque eos, possimus ullam enim sapiente
													reiciendis et laborum labore autem repellendus id
													minus neque ad voluptates amet laudantium ratione
													esse.
												</div>
												<div className='col-md-6 col-12'>
													<h1>IMAGE</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class='accordion-item'>
									<h2 class='accordion-header' id='headingFour'>
										<button
											class='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseFour'
											aria-expanded='false'
											aria-controls='collapseFour'
										>
											Other Services
										</button>
									</h2>
									<div
										id='collapseFour'
										class='accordion-collapse collapse'
										aria-labelledby='headingFour'
										data-bs-parent='#accordionServices'
									>
										<div class='accordion-body'>
											<div className='row'>
												<div className='col-md-6 col-12'>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Quia atque eos, possimus ullam enim sapiente
													reiciendis et laborum labore autem repellendus id
													minus neque ad voluptates amet laudantium ratione
													esse.
												</div>
												<div className='col-md-6 col-12'>
													<h1>IMAGE</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;

import img1 from "../images/hero-bg.jpg";

function About() {
    return (
        <section className="flex items-center min-h-[90vh] max-w-[1150px] mx-auto">
            <div>
                <div className="flex items-center justify-between mb-8">
                    <div className="w-[55%]">
                        <div className="mb-8">
                            <h2 className="text-7xl mb-6 font-bold">About So-Kleen</h2>
                            <div className="text-xl">
                                <p className="mb-3 font-semibold">
                                    So-kleen limited is a professional cleaning and space
                                    brightening company.
                                </p>
                                <p className="font-semibold">
                                    Founded in 2005, we quickly built a reputation as a leading
                                    provider of commercial and residential cleaning solution in
                                    the industry. Our solutions are designed to solve the mild to
                                    heavy dirt management problems that individuals, families and
                                    corporate organizations face.
                                </p>
                            </div>
                        </div>
                        <hr  className="bg-red-500 h-[3px]"/>
                    </div>
                    <div className="w-[40%]">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <p>
                    As an A-rated professional cleaning firm, we also know that a cleaner
                    environment supports a healthier, more productive and profitable
                    lifestyle; that is why our thorough cleaning service is made to leave
                    you happier and more satisfied.
                    <br />
                    <br />
                    Our hands-on approach, coupled with our experience, our attention to
                    details and the professionalism exhibited by management, employees and
                    our commitment to customer satisfaction, sets us apart.
                    <br />
                    <br />
                    Our continuous pursuit of service perfection has resulted in
                    consistent growth each year.
                </p>
            </div>
        </section>
    );
}

export default About;

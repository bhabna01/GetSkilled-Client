import React from 'react';
import { FaBookOpen, FaHome, FaPaperPlane, FaPenAlt, FaRocket, FaUser } from 'react-icons/fa';

const FAQ = () => {
    return (
        <div className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded mt-5'>

            <section>
                <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
                <p class="text-center mb-5">
                    Find the answers for the most frequently asked questions below
                </p>

                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><FaPaperPlane className='text-primary pe-2 fs-3'></FaPaperPlane> A simple
                            question?</h6>
                        <p>
                            <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees
                            your
                            safety and
                            security. All billing information is stored on our payment processing partner.
                        </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><FaPenAlt className='text-primary pe-2 fs-3'></FaPenAlt>A question
                            that
                            is longer then the previous one?</h6>
                        <p>
                            <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in
                            your
                            account. Once the subscription is
                            cancelled, you will not be charged next month.
                        </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><FaUser className='text-primary pe-2 fs-3'></FaUser> A simple
                            question?
                        </h6>
                        <p>
                            Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
                            account at any time with no further obligation.
                        </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><FaRocket className='text-primary pe-2 fs-3'></FaRocket> A simple
                            question?
                        </h6>
                        <p>
                            Yes. Go to the billing section of your dashboard and update your payment information.
                        </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><FaHome className='text-primary pe-2 fs-3'></FaHome> A simple
                            question?
                        </h6>
                        <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
                            reason.</p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                        <h6 class="mb-3 text-primary"><FaBookOpen className='text-primary pe-2 fs-3'></FaBookOpen> Another
                            question that is longer than usual</h6>
                        <p>
                            Of course! We’re happy to offer a free plan to anyone who wants to try our service.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FAQ;
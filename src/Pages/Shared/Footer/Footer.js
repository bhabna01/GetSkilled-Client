import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>

            <footer class="bg-dark text-center text-white mt-5">

                <div class="container p-4">

                    <section class="mb-4">



                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaTwitter></FaTwitter></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaGoogle></FaGoogle>
                        </a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaFacebook></FaFacebook>
                        </a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaLinkedin></FaLinkedin></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaGithub></FaGithub></a>
                    </section>


                    <section class="">
                        <form action="">

                            <div class="row d-flex justify-content-center">

                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>



                                <div class="col-md-5 col-12">

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" class="form-control" />
                                        <label class="form-label" for="form5Example21">Email address</label>
                                    </div>
                                </div>



                                <div class="col-auto">

                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>





                    <section class="">

                        <div class="row">

                            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Customer Care</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Return and Exchange</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">About us</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">My account</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Sign In/Register</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">My wishlist</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">My cart</a>
                                    </li>

                                </ul>
                            </div>





                        </div>

                    </section>

                </div>



                <div class="text-center p-3">
                    © 2022 Copyright:
                    <a class="text-white" href="">GetSkilled.com</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;
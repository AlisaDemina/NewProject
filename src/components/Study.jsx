import React from "react";

export class Study extends React.Component{
    render() {
        return (
            <section className="page-section" id="study">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Study</h2>
                        <h3 className="section-subheading text-muted">Изучаем слова</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" noValidate="novalidate">
                        <div className="row align-items-stretch mb-5">

                            <div className="col-md-12">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Выберите тему"
                                           required="required"
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Вывод английского слова"
                                           required="required"
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    <textarea className="form-control" id="message" placeholder="Показать картинку"
                                              required="required"
                                              data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Показать перевод"
                                           required="required"
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="Пример использования слова"
                                           required="required"
                                           data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group mb-md-0">
                                    <input className="form-control" id="phone" type="tel" placeholder="Прослушать произношение"
                                           required="required"
                                           data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <div className="text-center">
                                <div id="success"></div>
                                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton"
                                        type="submit">Send Message
                                </button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="text-center">
                                <div id="success"></div>
                                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton"
                                        type="submit">Send Message
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
}
import React from "react";

export class Registration extends React.Component{
    render() {
        return (
            <section className="page-section" id="registration">
                <div className="container">
                    <div className="col-sm-5 mx-auto my-5">
                        <h1 className="text-center my-3">Регистрация на сайте</h1>
                        <form onSubmit="sendForm(this); return false;">
                            <div className="mb-3">
                                <input name="name" type="text" className="form-control" placeholder="Имя" required/>
                            </div>
                            <div className="mb-3">
                                <input name="lastname" type="text" className="form-control" placeholder="Фамилия"
                                       required/>
                            </div>
                            <div className="mb-3">
                                <input name="email" type="email" className="form-control" placeholder="Email" required/>
                            </div>
                            <div className="mb-3">
                                <input name="pass" type="password" className="form-control" placeholder="Пароль"
                                       required/>
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="form-control btn btn-primary"
                                       value="Зарегистрироваться"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormControl";
import {required} from "../../utils/valedators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControl/FormControl.module.css'

const LoginForm =({handleSubmit,error})=>{
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name ={'email'} component ={Input} validate = {[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component ={Input} validate = {[required]}/>
            </div>
            <div>
                <Field component ={Input}  name ={'rememberMe'} type ={'checkbox'}/> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

const Login =(props)=>{
    const onSumbit =(formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return <div>
        <h1>Login</h1>
      <LoginReduxForm onSubmit={onSumbit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login)
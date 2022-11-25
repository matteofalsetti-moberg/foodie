type ButtonPorps={
    icon: string,
    className: string
}

 function Button(props: ButtonPorps){
    return (<>
            <button className={props.className} >
        <i className={props.icon} />
    </button>
    </>)
};

export default Button;
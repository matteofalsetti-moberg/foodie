
export interface IButtonPorps{
    icon: string,
    className: string
}

 function Button(props: IButtonPorps){
    return (<>
            <button className={props.className} >
        <i className={props.icon} />
    </button>
    </>)
};

export default Button;
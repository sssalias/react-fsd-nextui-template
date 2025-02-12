type Props = {
    children: React.ReactNode   
}

const Container: React.FC<Props> = props => {
    return (
        <div className='mx-auto w-[1200px] h-full'>
            {props.children}
        </div>
    )
}

export default Container
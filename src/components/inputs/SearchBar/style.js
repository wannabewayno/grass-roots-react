export const flex = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

const size = {
    position:'relative',
    height:'20px',
    padding:'0.1rem 0.5rem',
    borderStyle:'solid',
    borderWidth:'1px',
}

export const imgStyle = {
    padding:'0.2rem',
    width:'auto',
    maxHeight:'25px'
}

export const inputStyle = {
    ...size,
    width:'100%',
    borderBottomLeftRadius:'5px',
    borderTopLeftRadius:'5px',
}

export const labelBox = {
    ...flex,
    ...size,
    padding:'0.1rem 0',
    borderBottomRightRadius:'5px',
    borderTopRightRadius:'5px'
}

export const labelStyle = {
    fontSize:'90%',
    padding:'0.2rem 0.25rem',
}

export const containerStyle = {
    ...flex,
    justifyContent:'center',
    height:'fit-content',
    width:'100%',
}
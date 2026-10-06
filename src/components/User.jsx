function User({id,name,username}) {
  return (
    <div 
  style={{ 
    display: 'grid', 
    gridTemplateColumns: '2fr 2fr 1fr', 
    gap: '6px', 
    alignItems: 'center' 
  }}
>
<div>{id}</div>
<div>{name}</div>
<div>{username}</div>
</div>
  )
}

export default User
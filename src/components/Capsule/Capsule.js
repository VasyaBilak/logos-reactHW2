const Capsule = (props) => {
    const { capsule } = props;

    return (
        <div>     
              {capsule.status === 'active' && (
                <>
                    <h2>{capsule.capsule_id}</h2>
                    <p>{capsule.original_launch}</p>
                    <p>{capsule.status}</p>
                    <p>{capsule.type}</p>
                    <p>{capsule.details}</p>
                </>
            )}   
            
        </div>
    )
}

export default Capsule;
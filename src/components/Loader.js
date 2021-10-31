function Loader() {
    return ( 
        <div className="w-screen h-screen bg-light flex items-center justify-center fixed top-0 left-0 z-50">
            <div style={{
                borderTopColor:'#035afc'
            }}  className="w-8 h-8 border-4 border-primary border-opacity-20 rounded-full animate-spin"></div>
        </div>
     );
}

export default Loader;
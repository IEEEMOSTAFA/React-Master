import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Shawn'}></Cousin>
                <Cousin name={'Ekram'}></Cousin>
            </section>
            
        </div>
    );
};

export default Aunty;
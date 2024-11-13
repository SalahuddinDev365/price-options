import PriceOption from "../priceOption/PriceOption";


const PriceOptions = () => {


    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 guest pass per month",
                "No contract required"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited guest passes",
                "Free fitness assessment",
                "Access to group classes",
                "1 personal training session per month"
            ]
        },
        {
            "id": 3,
            "name": "Premiumn Membership",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited guest passes",
                "Free fitness assessment",
                "Access to group classes",
                "4 personal training sessions per month",
                "Access to sauna and pool",
                "Free nutrition consultation",
                "Priority customer support"
            ]
        },

    ]




    return (
        <div className="m-12">
            <h2 className="text-5xl font-semibold pb-12 text-center">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 ">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
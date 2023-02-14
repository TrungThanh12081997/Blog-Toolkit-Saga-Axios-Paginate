import icon from "assets/icons/ic_headphone.svg";

// import { Reputation } from ".";

const dummyDataReputation = [
   {
        title: "Our Reputation",
        dataReputation: new Array(3).fill({
            title: "Best Teams",
            description: "Cursus semper tellus volutpat aliquet lacus.",
            icon,
        }),
    },
    {
        title: "Services",
        dataReputation: [
            {
                icon,
                title: "Construction",
                variant: "white",
            },
            {
                icon,
                title: "Construction",
                variant: "blue",
            },
            {
                icon,
                title: "Construction",
                variant: "white",
            },
            {
                icon,
                title: "Construction",
                variant: "blue",
            },
            {
                icon,
                title: "Construction",
                variant: "white",
            },

            {
                icon,
                title: "Construction",
                variant: "blue",
            },
        ],
    },
];

export default dummyDataReputation;

import Heading from "components/atoms/Heading";
import Container from "components/molecules/Container";
import Card, { CardProps } from "components/organisms/ReputationCard";
import React from "react";

interface ReputationProps {
    title: string;
    dataReputation?: CardProps[];
}

const Reputation: React.FC<ReputationProps> = ({ title, dataReputation }) => (
    <div className='t-reputation'>
        <Container>
            <div className='t-reputation-title'>
                <Heading
                    modifiers={["700", "16x20", "workSans", "center", "gunMetal", "capitalize"]}
                >
                    {title}
                </Heading>
            </div>
            <div className='t-reputation-cards'>
                {dataReputation &&
                    dataReputation.map((item, idx) => (
                        <div className='t-reputation-card'>
                            <Card
                                key={`dataReputation-card-${idx.toString()}`}
                                {...item}
                            />
                        </div>
                    ))}
            </div>
        </Container>
    </div>
);

export default Reputation;

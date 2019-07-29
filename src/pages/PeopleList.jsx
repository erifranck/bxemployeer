import React from 'react';
import Container, {ModalConsumer} from "../components/Container/Container";
import {Table} from "../components/Table/Table";
import {peopleListLabels} from "../constants/peopleData";
import {PeopleConsumer} from "../Context/People";

export const PeopleList = () => {
    return (
        <Container>
            <ModalConsumer>
                {({openModal, toggleModal}) => (
                    <PeopleConsumer>
                        {
                            ({data, getData}) => (
                                <>
                                    <Table dataLabels={peopleListLabels} data={data}/>
                                    <button onClick={() => toggleModal(!openModal)}>
                                        {openModal ? 'close modal' : 'open modal'}
                                    </button>
                                </>
                            )
                        }
                    </PeopleConsumer>
                )}
            </ModalConsumer>
        </Container>
    );
};

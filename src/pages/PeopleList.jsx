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
                            ({data, deletePerson}) => (
                                <>
                                    <Table
                                        dataLabels={peopleListLabels}
                                        data={data}
                                        onDelete={ (id) => toggleModal(true, null, () => deletePerson(id))()}
                                    />
                                    <button onClick={() => toggleModal(!openModal, null)}>
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

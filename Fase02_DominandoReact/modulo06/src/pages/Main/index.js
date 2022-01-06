import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';

const Main = ({ navigation }) => {
    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Adiconar usuário"
                />
                <SubmitButton onPress={(_) => console.warn('Press...')}>
                    <Icon name="add" size={20} color="#FFF" />
                </SubmitButton>
            </Form>
        </Container>
    );
};

export default Main;

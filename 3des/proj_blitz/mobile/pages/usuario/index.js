import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';

export default function Usuario() {
    const [senha, setSenha] = useState("");
    const [modal, setModal] = useState(false);

    const showModal = () => {
        if (modal == false) {
            setModal(true);
        } else {
            setModal(false);
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/app/avatar.png')} style={styles.image} />
            <TextInput style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder={'Nova senha'}
            />
            <TouchableOpacity>
                <Text onPress={() => showModal()} style={styles.btn}>Abrir</Text>
            </TouchableOpacity>
            <Modal
                visible={modal}
            >
                <TouchableOpacity>
                    <Text onPress={() => showModal()} style={styles.btn}>Fechar</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        top: 0,
        borderWidth: 1.0,
        borderRadius: 5,
        width: 200,
    },
    image: {
        width: 128,
        height: 128,
        bottom: 80,
    },
})
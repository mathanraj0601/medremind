import { Animated, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons';

const NotificationModal = ({ medications, showNotification, closeNotificationModal }: NotificationModal) => {
    const colors = useThemeColor();
    return (
        <Modal visible={showNotification} transparent animationType='slide'  onRequestClose={closeNotificationModal}>
            <View style={[styles.modalOverlay, { backgroundColor: colors.overlayBlack  }]}>
                <View style={[styles.modalContent, { backgroundColor: colors.white }]}>
                    <View style={styles.notificationHeader}>
                        <Text style={[styles.notificationtext, { color: colors.black }]}> {text.notification} </Text>
                        <Ionicons name='close' size={30} color={colors.black} onPress={closeNotificationModal} />
                    </View>
                    <View style={styles.medicationNotiContainer}>
                        {
                            medications.map((medication) => (
                                <View key={medication.name}>
                                    <Text>{medication.name}</Text>
                                </View>
                            ))
                        }
                    </View>
                   
                </View>
            </View>
        </Modal>

    )
}

export default NotificationModal

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15,
        maxHeight: "80%",
    },
    notificationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    notificationtext: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    medicationNotiContainer: {
        justifyContent: 'center'
    }
})

const text = {
    notification: 'Notification'
}
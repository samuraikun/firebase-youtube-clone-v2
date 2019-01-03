import { Dispatch, Store } from 'redux';

export const socialLogin = (selectedProvider: string) => async (dispatch: Dispatch, getState: Store, { getFirebase, getFirestore }: { getFirebase: any, getFirestore: any }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    const user = await firebase.login({
      provider: selectedProvider,
      type: 'popup'
    });

    if (user.additionalUserInfo.isNewUser) {
      await firestore.set(`/users/${user.user.uid}`, {
        displayName: user.profile.displayName,
        photoURL: user.profile.avatarUrl,
        createdAt: firestore.FieldValue.serverTimestamp()
      });

      console.log('logined!!');
    }
  } catch (error) {
    console.log(error);
  }
}

# Présentation générale

RaiseHandDetect est un site ayant pour but de d'indiquer quelle main a été levée en premier.

Lien vers le site : https://handdetect.netlify.app

Le site à pour but d'être utilisé dans le cadre d'un quiz. Les joueurs se mettent devant la caméra et quand un des joueurs
veut répondre il lève la main et le site indique la première main levée. Le but étant de départager les joueurs quand le
temps entre les mains levées est minime.

Ce site est pensé pour être tout d'abord mobile first, cependant il reste fonctionnel sur ordinateur, l'interface ne sera juste pas la plus adapté

# Problématique rencontrée durant le développement :

Je suis parvenu à trouvé une api qui detecte les mains ainsi que le geste effectué. Cependant je ne suis pas parvenu à importer l'exemple de code qui était fourni et qui contenait du code en typescript. J'ai ajouté typescript ainsi que l'api à mon projet mais je n'arrive pas à compiler le code existant. J'ai essayé également sur un projet vide et j'ai réussi à le compiler une fois mais depuis je n'y arrive plus.
Pour le moment j'ai donc laissé un accès à la webcam sans l'intégration de l'api. J'ai tout de même installer l'api avec npm avoir une idée plus réaliste du poids que le projet est supposé avoir.

# Lien vers les ressources utilisées :

L'image pour le logo a été récupérée ici : https://www.flaticon.com/fr/icone-gratuite/paume-de-la-main_3562235?term=hand&page=1&position=26&origin=search&related_id=3562235
L'API qui devait être utilisé : https://ai.google.dev/edge/mediapipe/solutions/vision/gesture_recognizer?hl=fr

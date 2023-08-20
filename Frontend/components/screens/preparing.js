import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Center, Image, NativeBaseProvider, ScrollView } from "native-base";
function Preparing() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
      <Image
              resizeMode="cover"
              position="absolute"
               width="100%"
    height={"100%"}
              source={{
                uri: "https://img.freepik.com/vector-gratis/fondo-abstracto-azul-acuarela_52683-74892.jpg",
              }}
            />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Center>
            <Image
              alt="logo"
              size={150}
              borderRadius={30}
              backgroundColor="#FFFF"
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/6683/6683592.png",
              }}
            />
          </Center>
          <Text style={styles.pageTitle}>¿Cómo actuar ante un sismo?</Text>
          <View style={styles.stepsContainer}>
            <Step
              number="1"
              title="Mantén la calma"
              description={
                <>
                  Resiste el pánico y{"\n"}
                  busca un lugar seguro.
                </>
              }
              image="https://cdn.futbolperuano.com/sdi/2020/09/07/terremoto-en-peru-que-hacer-si-ocurre-un-sismo-fuerte-en-contexto-covid-19-855236.jpg"
            />
           <Step2
  number="2"
  title={ <>Protégete bajo una{"\n"}estructura sólida</>}
  description={
    <>
      Agáchate, cúbrete la {"\n"}cabeza y manten una
       {"\n"} posición fetal bajo{"\n"} un mueble resistente.
    </>
  }
  image="https://th.bing.com/th/id/R.bccaa5f6fb157b9d2382cc4b02f93bc5?rik=TXjjhOqqAM2hcg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-S0NIYrimBlI%2fUbnJR3MAD7I%2fAAAAAAAAABI%2fGHqQQgfFaNI%2fs1600%2f13%2bProt%c3%a9gete.png&ehk=4OyG75w%2b%2bdLrUCOibIiYao30TXkQS5yUKM9lZyDyN%2bg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
/>
<Step
  number="3"
  title={<>Aléjate de ventanas y {"\n"}objetos que puedan{"\n"}caer</>}
    description={
    <>
      Evita vidrios, espejos {"\n"}y objetos 
      que puedan {"\n"}caer durante el temblor.
    </>
  }
  image="https://th.bing.com/th/id/OIP.I96qJBl4_xRxIApn04UdjwHaFj?pid=ImgDet&rs=1"
/>
<Step2
  number="4"
  title="No uses ascensores"
  description={
    <>
      Evita usar ascensores {"\n"}durante un sismo;{"\n"}utiliza las escaleras.{"\n"}
    </>
  }
  image="https://th.bing.com/th/id/R.fb4c4ef38d9e3e42e6a6888091bb4122?rik=kcwLBCHEPy4%2f6g&riu=http%3a%2f%2fqualitytrends.squalitas.com%2fimages%2fstories%2fNOAscensores.jpg&ehk=KlpZF41EmDWdlUq0n6wX55mOMpaDL7F2vZ9kS50XvVI%3d&risl=&pid=ImgRaw&r=0"
/>
<Step
  number="5"
  title={<>Aléjate de estructuras {"\n"}peligrosas</>}
  description={
    <>
      Sal de edificios {"\n"}y aléjate de postes
      {"\n"} eléctricos y cables.
    </>
  }
  image="https://th.bing.com/th/id/R.12627abcab8abcfafbcacd39a31c0ebc?rik=EuIFXKJc5a5LDw&riu=http%3a%2f%2fwww.misaki.rdy.jp%2fillust%2fkisetu%2fivent%2fbousai%2fsozai%2fr703.jpg&ehk=%2b4GwFfGFVV58t1TLReHWeDfJE8SVO6UElsCPlIyAehg%3d&risl=&pid=ImgRaw&r=0"
/>
<Step2
  number="6"
  title={<>No te refugies en{"\n"} zonas peligrosas</>}
  description={
    <>
      No busques refugio en zonas cerca 
      de laderas{"\n"}, ríos o playas, ya que puede ocurrir accidentes{"\n"} busca zonas seguras.
    </>
  }
  image="https://rklgraphics.com.mx/wp-content/uploads/2020/10/8infoverde-300x300.png"
/>

            {/* Agrega más pasos según sea necesario */}
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

function Step({ number, title, description, image }) {
  return (
    <View style={styles.stepContainerR}>
      <View style={styles.stepNumberContainer}>
        <Text style={styles.stepNumber}>{number}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
      <View>
        <Image alt="logo"
              size={100}
              borderRadius={30}
              marginRight={5}
              marginTop={2}
              marginBottom={2}
              source={{
                uri: image,
              }}></Image>
      </View>
    </View>
  );
}
function Step2({ number, title, description, image }) {
    return (
      <View style={styles.stepContainerL}>
        <View style={styles.stepNumberContainer}>
          <Text style={styles.stepNumber}>{number}</Text>
        </View>
        <View style={styles.stepContent}>
          <Text style={styles.stepTitle2}>{title}</Text>
          <Text style={styles.stepDescription2}>{description}</Text>
        </View>
        <View>
        <Image alt="logo"
              size={100}
              borderRadius={30}
              marginLeft={5}
              marginTop={2}
              marginBottom={2}
              source={{
                uri: image,
              }}></Image>
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89D5C9", 
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    color: "black", // Text color
  },
  stepsContainer: {
    marginVertical: 16,
  },
  stepContainerR: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 22,
    borderWidth:2,
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor:"white"
    
    
  },
  stepContainerL: {
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    marginBottom: 22,
    borderWidth:2,
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor:"white"
  
   
    

  },
  
  stepNumberContainer: {
    backgroundColor: "#0090ad81", 
    opacity: 0.8,
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginLeft: 5,
    borderWidth:2,
    marginTop:5,

  },
  stepNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", 
    
    
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", 
    marginTop:5,
    
  },
  stepTitle2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", 
    textAlign: "right",
    marginTop:5,
  },
  stepDescription: {
    fontSize: 16,
    marginTop: 4,
    color: "black", 
    marginBottom:5
  },
  stepDescription2: {
    fontSize: 16,
    marginTop: 4,
    color: "black", 
    textAlign: "right",
    marginBottom:5
  },
  pageTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginTop: 24, 
    marginBottom: 16,
    
  }
});

export default Preparing;

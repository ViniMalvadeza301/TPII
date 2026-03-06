# DEFINE AS PARTES DE UM CARRO

class Motor:
    def __init__(self, tipo):
        self.tipo = tipo


class Carroceria:
    def __init__(self, estilo):
        self.estilo = estilo


class Rodas:
    def __init__(self, aro):
        self.aro = aro


class Interior:
    def __init__(self, cor):
        self.cor = cor


# BUILDER

class CarroBuilder:
    def __init__(self):
        self.motor = None
        self.carroceria = None
        self.rodas = None
        self.interior = None

    def addMotor(self, tipo):
        self.motor = Motor(tipo)
        return self

    def addCarroceria(self, estilo):
        self.carroceria = Carroceria(estilo)
        return self

    def addRodas(self, aro):
        self.rodas = Rodas(aro)
        return self

    def addInterior(self, cor):
        self.interior = Interior(cor)
        return self

    def construir(self):
        return Carro(
            self.motor,
            self.carroceria,
            self.rodas,
            self.interior
        )


# CONSTRUIR CARRO

class Carro:
    def __init__(self, motor, carroceria, rodas, interior):
        self.motor = motor
        self.carroceria = carroceria
        self.rodas = rodas
        self.interior = interior

    def mostrar_detalhes(self):
        print(
            f"Especificações do carro: "
            f"Motor: {self.motor.tipo}, "
            f"Carroceria: {self.carroceria.estilo}, "
            f"Roda: {self.rodas.aro}, "
            f"Interior: {self.interior.cor}"
        )


# CLIENTE

carro1 = (
    CarroBuilder()
    .addMotor("1.4")
    .addCarroceria("Esportivo")
    .addRodas("18")
    .addInterior("Preto")
    .construir()
)

carro2 = (
    CarroBuilder()
    .addMotor("1.0")
    .addCarroceria("Pickup")
    .addRodas("15")
    .addInterior("Rosa")
    .construir()
)

carro1.mostrar_detalhes()
carro2.mostrar_detalhes()
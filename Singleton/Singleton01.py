class Singleton:
    def __init__(self):
        if Singleton.instance == null:
            Singleton.instance = self
            self.value = 0
    
        return Singleton.instance

    def increment(self):
        self.value += 1
        print(f"Value: {self.value}")

s1 = Singleton()
s2 = Singleton()
s3 = Singleton()

print(s1 == s2); # true

s1.increment();
s2.increment()

print(s3 == s1); # true

s3.increment()

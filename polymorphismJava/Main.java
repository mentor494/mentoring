import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        Cat cat = new Cat("mitzi");
        Cat cat2 = new Cat("mrbin");
        Dog dog = new Dog("alpha");
        Cow cow = new Cow("jessy");


        List<Animal> animals = Arrays.asList(cat, cat2, dog, cow);

        AnimalsCall animalsCall = new AnimalsCall(animals);

        animalsCall.makeAllAnimalsSpeak();
    }
}

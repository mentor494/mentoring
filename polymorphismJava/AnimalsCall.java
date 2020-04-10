import java.util.List;

public class AnimalsCall {

    List<Animal> animals;

    public AnimalsCall(List<Animal> animals) {
        this.animals = animals;
    }

    void makeAllAnimalsSpeak(){
        animals.stream().forEach(animal -> animal.speak());
    }
}



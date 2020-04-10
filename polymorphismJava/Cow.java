public class Cow extends Animal {


    public Cow(String name) {
        super(name);
    }

    @Override
    public void speak() {
        System.out.println(name+" muuu muu");
    }
}

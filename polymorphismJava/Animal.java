public abstract class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    abstract void speak();

    public String getName() {
        return name;
    }
}

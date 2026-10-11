import java.io.File;
public class KopeykaOptifineInstall {
  public static void main(String[] args) throws Exception {
    Class.forName("optifine.Installer").getMethod("doInstall", File.class).invoke(null, new File(args[0]));
  }
}

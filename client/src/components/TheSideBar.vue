<template>
  <div class="hidden">
    <vs-sidebar absolute hover-expand reduce v-model="active" open>
      <template #logo>
        <vs-avatar>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUXFhcXFxYVFRUVFRUVFRcXFxUVFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0OFxAQFS0dHR0rKy0rLSstKy0rLSstKzctLS0tLS0tLS0tLS0tLS0tKy0tLS0tLy0rLTctLS0tLS03Lf/AABEIAOgA2gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBgcFAQj/xABEEAACAQIBCAYHBAgFBQAAAAAAAQIDEQQFBgcSITFBUSJhcYGRwRNScqGx0fAjMmKyFCQzNEKCs+ElkqLC8UNTY3Sj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAAICAwACAwAAAAAAAAAAAQIRAzEhMkEi8BJCcf/aAAwDAQACEQMRAD8A3EAAAAAAAAAAAAAAAABjG1dSDlyQ+QMspuk0t7BGe5zZQ6LbfGxV1iLjmdOJu1Fdbfc2vI48KuwzXSOlLEio1zlKqPxmRXWhXOjhcQcWmSKNSzJpqLbg8RtRcsi1Lpmc4KtuNEzfj0LlxTPp1QPIs9NuIAAAAAAAAAAAAAAAAAAAAAAAAAAAYxn3JcdjObnXlr9EoqolduSiuSum7vqtErNPPlV6lOhquLlGTk1uvGzTXHdfYF1dbUTOjCtV6nKykuxpPzOPQjeNi+5y4SMqUq0uEPR8ulrN3KRSVkjNahjVsx+ET1skU0mRouk2SacRiGx2JNOaRKsdXBQ3GmZE/ZRsZfha5o+beJUqOzekaw7TPp2Kb4Dpx8blVUYptXu2kuu19vUSslY/0qd0046qfJ60VJNdVpI1b5Y1dbTgAAyAAAAAAAAAAAAAAAAAAAAAAAKdpVg3gHbhOPg7xfudu8y/MOWtjYRlttCpb/K/kzaM8MKquCrxey0HK/LU6V/cYzmdV1Mp0Yve1Vj3+im170T66Tzi6mkHKq9H6BSs76zXvRncMdOP8VyzZ0JSxM7rkcJ4ZwbcVsDL2hldbpM6GGx63pnJq0bqzSt2JfAYw2GvNJbLu28l0sWb9NV+4RXyxCCve7PcVkn7O8drS77HIWBe9Lb7yNJ1LLMpySUlH4mm5h4t7E537zOMmYB7pReq+Fkl7l1svea2H1akdm9mpZGVrzypqNFN707pc3y8ydmdX9Jh9d727Prtu9zIOe8VP0NJK8m211JKzv4o7eQsKqVCEVyu+1k/st9I6AABpzAAAAAAAAAAAAAAAAAAAAAAACakFJNNXTTTXNPejBMoYKWDyrTjtWpiKerfjCUlFPvjL4m+kTF5Mo1ZRnUpQnKH3ZSim49jfiRZfjC8/aDpY2b/AIZJOPZbYcbWujuZ4YtVXUi/vUpyXW432Pub8Cr0apK1Cq4zhJdOPaKry2NjODteLvtvtAv2EV4PrSRya9DVluOrkeo5KSi02kmc/KsJUq2pJpppSTTvv4e5ixqF4erbYXTNWneSnyKhk/COb2czQsh4TUSX1cuMTKujiKvpMTGPKy8VfzLFTgkkluSt4DNDCwT11FazSvK217LbyQVm3fgAABkAAAAAAAAAAAAAAAAAAAAAAAAAAHzrnxRdPGVvbmn2X+VjiqFlF80/d/yX7SbgYzxlTV3uEXJcpavRl2OzXalzKTlCk4qPKy8Wv7e8jSDWntsR4YXbeOxiK0rEjCV3e6i33pBXUwNSVtVvZxs2r/2OrSwicUl3HHw9R32UpbetHRljHFR6M1t4x2W7VsI0uGYtG9TVktq+RdMAttusrmaTTmqq4w29pbcFG9RLm2+5G54jFdxI9ACMgAAAAAAAAAAAAAAAAAAAAAAAAAABurWjHVTdnJ6sVxbs3Zdyb7Ezn5dy/QwkNarNJ8Ir7z7uHaUXNTOWeUMqOctlKhQqSjFblKUoQXe1Ke0uhTdIWVJSxv6RTdpJOLXBqMmnGS4p7P8AlHFyllCFeneKs076vGLf3o9nFM7efuS9WvOrD7rb1lyfrFLxFJp60djM3w12UulvPYYd8Ao1Ytay2PiuT+R0MLNEWG8NQmmntZ3cJCctjRDw1ZJlvyJWpKEpztsX0gqdkOr6GD1uilsLPmtinVqOb3Wsl2soVbFuo+SvsXI0DMqleN0uit75vkuz5dZZdpVjwuNjOVSCfTpySlHirpSi+xpp+K4EkyfP3LFXB5VVWk7N0Kba4SWtUTTXFdFeBdM2M8aGLSjfUq22we5vjqvj2GtMLIAAQAAAAAAAAAAAAAAAAAARcflKlQWtVqRgut7X2Leyi5f0nU4Xjh4az9aexd0S6Gg1q0YJynJRS3tuyXeZ1nnpLhSTp4R60uNT+FdUeb6/pZtl/OnEYl3rVZNcI7or+VbEVaviG2XSOplHLNStNzqTcm3fa2y26IcRari3x9HSXjKbfwRnSlsLhotq2qYjrhD4zt5iC15UnrTfWVXKmRt8qauuMeK7OaLXiIXZGdMtmzemaVcHJSuh6gql7WRdsdkWNXaujPnwfavM4OJyZUpPpQfaleL7GjFljcspvC4aW9vuOtQlstwG8k5Pq1fuQbXrPZFfzPf3F+zfzahTtOfTnwv92L/CvN+4kxtLZEHN7IEqlp1E4w4LdKXyXWabkqkowUYpJLcluSOXSpHYwmxHS4yRje6xzTFP/EI/+vT/AKlUqWExkoSTi2muKLJphn/iKf8A4aa8JT+ZTYTKjZc0tIUJxVPFO0lZKp6y2W1lzL5hsVCorwmpLqfxXA+bsLUV7+J28BlWrS2wnJcvpk/ibb4Bl+TNINWGyolNc+Jasm574Wrsc9R/i3GdVdrMA1QxEJq8JKS6mmOkUAAAAFbyznfRo3jD7SS32fRXa+PcUnKuetWad5JL1YuyXbbeXSbaRlTLlGgunO79WO1/27yg5waQajvGl9muas5eL3dxn+U8vzk30ivYrHN72XSbdzKmWXUbcpSk+bbb95w8Ri7kCdV8xqUyh+rXuiPcRKZ5CSuRT8txaNGmLUa9Sm/+pFWf4oazt3py8Cp1Z8DrZqaynKUPvQ1ZLtTvbv3d5Rq9SAy6ZIoVlUhGpHdJJ9nU+sJJGkQsVWhRhKpUkowirtvh831Ga5bzyxFaf2UpUqa+7FW1n+KT59XA6GeeLqYpPUT9BB9H8bW+b8urtKfRhcxlXTDHa4ZpZ116NXXrVJVKTVpppXS9eNlvXvRt2Ta8JxjOElKEkpRkndNPc0fPeFw7cEoq7k1FLm3sNLzGxLwShh6kr0n/ABPdCb325Qb8PEvHbWuXCY6anRiTqW4jYWGwk1Hqpvq97NZX44sI0sV9bHt8FBRX8rafvuVKCLnpbw+rVpSXFS+MSlYeaIJmGrWJ6xHvOXbkx2LduwqOnr9d7nsa1jnxqHqfECw4LKc4NOE5RfU2juRzxxVv20vBFLw7Y86v1caH0eUTSTl2VPVw8JOLlHWm1svHco/HYXsxjTDidXGQt/20u/b80c41VcxGULbji4vH3ImIrvmc+pVNIeq4gizmIlIbbClykIuJuBAMEeHqAVItOj+hrSrP2UVRl50aQ6FZ/jS8Ir5lnYtuQnq69F8Hrx7H95eO3+YTlW9T7GL2PbUa9XhDv+HaOui9eM47GvenvTJdKkknze1vm+ZtHGxOAWra3DcZflHDOlWqQUXZPWVvVfkt3cbJWgZVlqprV8TJcPs142l79Yxn06cXs7eZNJVsXQik9WMZT2rZ9x2bt1uJdsq5LavZXRRMwMb6LFYeT3N+jl2TvFX7G4vuNxnhFIcfTXPvc/xzMw8vXthqr6S/Zyf8SX8D618C31p32d/yKxPNaEnrJuMr3TW9Pgyw0qMkld6zttfOy3nTTizPTNhrQoy/FJeKv5GVU0bDpmmv0ejz9K/yyMdiZvYcdNSd2r9fEdpUkv8Al/AbixxIgk3sxym19eYxAdhFlRIhPl9fWwkKT4EaOz6+uZ62/plR9NmAaVcT6Ss6nq1XHu4fA3jHV9SnOfqxb8FsPnfO2WtTn7Sl18V5nKN1UsRMiTkOVpX2kdsoGxOseNngHtzy4XPAFBcAQHrZo+jWj+rzlzqv3KK8jODUtHULYNddSo/9TXkax7Ks9OA7GJ7SgOqJpELHSUISm9ijFt9iVzF8NUc/SX3zet33bfxNK0i4/wBHhvRx31HZ+ytsvJd5mWBfSXacuSu/DPro5PpPo8Hd7eT4M+iMl4n0tKnU9eEJf5op+ZgeFW3sZtmZtZTwdF8o6v8AlbS91hxXy3z4/jK78b8wqV5R3CWxDkdnlZxperOdGlzVX/ZMy9I1TSnC9KPVUX5ZIy+UTNCEOKQlI9SIHqTJSf19byNAl0+vkaiHIvhxYu/V8RH19e4Rfr+vAqPoLPTE6mEqPnaPi/kmYPlqrdNcGbNpLqWwqXOfwi/mYZlqZynTasz2XjyY0x/EO/S8RiQCTwXYQ0B4enlj2wHp6jw9QCka3o9pfqNLrdR//WZkps+YUbYGh2S99SbNYldxRPW9gtjdXcaRmmkOu3VhHgot+L/sVLDLaWbP39vH2PMrWH3nDPt6+L1jr05Wb60a3owq3wlnwm/el8jHrmuaLP3aXtfMcfs3zelXdI8dM9gyVSimeivCzjSnTth7/ij8vMydmxaYadsK3+KP5kY5BmaPLCoo8HKUSIeUdnWLpztvHlFWGKkDSHHO4ly+riaT4Dln1e4DbNKP7vD2/Iw/Le5m46Uf3aHt+RheXXsZznTau3EsGDYCooTKI5TCSAYaAUzywHiFpCYi0B6jacx1+o0PZf55GLmxZiT/AFCh2T/qTNYlWOwxiNw6pkfFy2M0jMM+Zfbr2fM4FCO07Od0r4h9UUcyhE8+fb28XrEjVNa0VfsKi5SXwZk8TV9FK+yq+1D/AHF4/aHN6X9+rzFD0J2EqJ5JHpeJUdLMtbBT6nH80TFKRsGlGr+pzXs/mRjkGYvYeSF0t6G1IdpPaESpT38TyUggiP6SzKHI7GS47v7EKo+I5F7N4RtulSVsPD238DCMuS2d5t2lmranSj7b/KYdlV3T7TnOm3EkjySFtHjIr2jIdmiMS+AEdoSx1oS0VCEKR4kKigFWNdzH/caPZP8AqTMksa9mDG+BpdtT+pM1iV3IjGOl0WTPRnPyouiaRl+cMtbETfKyIlFC8pu9SftM8w557292HiQ4katonl9lW7Yf7zLYo1XRXC1Gr7UfhL5l4/aJy+l/fq9xkDYlRPGj0vEoOlZ2wsuuUPzIyGLNU0tT+xS5zXz8jKkc6HUxcWNRYpsCXh6u0j4x2Z5TnYMSr7QhMKo+qnWc9SHlIDZdLWJ+0jH1ad+9tmNYiV7ml6T8VrYiv+FQj4JX99zL6Tu2ZaQZCGOzQhoikEqn91EexKpLogNWPHEe1BNVFRHFoSkOJALijVcxK+rg6S65++pJmWQRpWbKthqduXmywq4wrJkDK/3WyNSxDQxlbFdBmkZjiZXnL2n8R6hEYlvvzbJdNbDz178DkEarowdqE+upbwin5mW0kato1h+qt86sn/pgvI3x+zHP6rskN1nZCVOwxiq2w7vGzDSvi9ZQj+K/uZnKLxpOl04dr+BSEYoEengogEPT3DI7fYUQpbxSmeTQEF0z2xWvUxM/WrPwvIpNF9JABFM1VtYiwARXg/QewAED8YkfEbwAIZHmgARTlNGmZtfu1L2QA3EqfUicTLOIcYS6kwAtRSrbiVF7AA89e+HIyNj0e0rYGm/Wc3/ra8gA6cfblz38VjZBxr2HgHd5WR6Q6l6kF2+RUwA53sCQtIAICwtbn2AAEZo8AAP/2Q=="
            alt=""
          />
        </vs-avatar>
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home" @click="redirectHome"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="Profile">
        <template #icon>
          <i class="bx bxs-user-rectangle" @click="redirectProfil"></i>
        </template>
        Profile
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat" @click="redirectChatContainer"></i>
        </template>
        Chat
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group"></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram"></i>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter"></i>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook"></i>
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-item id="Calendar">
        <template #icon>
          <i class="bx bx-calendar"></i>
        </template>
        Calendar
      </vs-sidebar-item>
      <vs-sidebar-item id="Event">
        <template #icon>
          <i class="bx bxs-calendar-event" @click="redirectEvent"></i>
        </template>
        Event
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class="bx bxs-shopping-bags"></i>
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="Contact Us">
        <template #icon>
          <i class="bx bx-support" @click="redirectContactUs"></i>
        </template>
        Contact Us
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "home",
  }),
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
    redirectProfil() {
      this.$router.push("/Profil");
    },
    redirectChatContainer() {
      this.$router.push("/ChatContainer");
    },
    redirectEvent() {
      this.$router.push("/Event");
    },
    redirectContactUs() {
      this.$router.push("/ContactUs");
    },
  },
};
</script>
